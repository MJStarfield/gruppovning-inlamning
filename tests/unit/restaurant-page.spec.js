import { mount } from '@vue/test-utils'
import RestaurantPage from '@/page/RestaurantPage.vue'

describe('Restaurant Page Reservation', () => {
  test('dateTime data property has a default value', async () => {
    const component = mount(RestaurantPage, {})

    const componentData = await component.vm

    const { dateTimeStr } = componentData

    expect(dateTimeStr).toEqual(expect.any(String))

    // We remove the last Z.
    const mockDate = new Date().toISOString().substring(0, 16)

    expect(dateTimeStr).toHaveLength(mockDate.length)
  })

  it('should change booking time on user input', async () => {
    const date = '2022-05-20T17:50:17.000'

    const component = mount(RestaurantPage, {})

    const bookTimeInputElement = component.find('#restaurantBookTime')

    await bookTimeInputElement.setValue(date)

    expect(bookTimeInputElement.element.value).toBe(date)

    const componentData = await component.vm

    const { dateTimeStr } = componentData

    expect(dateTimeStr).toBe(date)
  })

  it('should add an order when button #book is clicked', async () => {
    const orderDate = '2022-05-20T17:50:17.000'

    const component = mount(RestaurantPage, {
      data() {
        return {
          dateTimeStr: orderDate,
        }
      },
    })

    const bookSubmitButtonElement = component.find('#book')

    await bookSubmitButtonElement.trigger('click')

    const store = await component.vm.store

    expect(store.state.order.length).toBe(1)

    const { dateTime } = store.state.order[0]

    const parsedDate = new Date(orderDate)

    // Order dateTime is always a javascript date.
    expect(dateTime).toEqual(parsedDate)
  })
})
