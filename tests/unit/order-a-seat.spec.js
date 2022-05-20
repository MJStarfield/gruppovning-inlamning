import { mount } from '@vue/test-utils'
import RestaurantPage from '@/page/RestaurantPage.vue'

it('should change the date and book a table', async () => {
  const wrapper = mount(RestaurantPage, {})

  const restaurantBookTimeInput = wrapper.find('input[name="restaurantBookTime"]')
  const restaurantBookSubmitButton = wrapper.find('#book')

  await restaurantBookTimeInput.setValue('2022-05-20T16:50:17.000')

  expect(restaurantBookTimeInput.element.value).toBe('2022-05-20T16:50:17.000')

  await restaurantBookSubmitButton.trigger('click')

  const store = await wrapper.vm.store

  expect(store.state.order.length).toBe(1)
})
