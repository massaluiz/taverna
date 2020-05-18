import Tests from '../Tests';
import { shallowMount } from "@vue/test-utils";
import Dices from '../../src/components/dices/Dices';

describe('This session is to test the component Dices', () => {

  let wrapper;

  beforeAll(() => {

    wrapper = shallowMount(Dices);

  });

  test('is a Vue instance', () => {

    expect(wrapper.isVueInstance()).toBeTruthy();

  });

  test('If the state of validation variable is false', () => {

    reSetData(wrapper);
    expect(wrapper.vm._data.required).toBe(true);

  });

  test('If the state of validation variable is false when all fiels is not filled', () => {
    
    reSetData(wrapper);
    wrapper.vm.onChangeRequired();
    expect(wrapper.vm._data.required).toBe(false);

  });

  test('If the state of validation variable is true when all fiels is filled', () => {
    
    setData(wrapper);
    wrapper.vm.onChangeRequired();
    
    expect(wrapper.vm._data.required).toBe(true);
  });

  test('Expected true in inserted varieble if a dice is created', () => {

    setData(wrapper);
    wrapper.vm.onChangeRequired();
    expect(wrapper.vm.create().inserted).toBeTruthy();
    
  });

  test('Expected false in inserted varieble if a dice is not created', () => {

    reSetData(wrapper);
    wrapper.vm.onChangeRequired();
    expect(wrapper.vm.create().inserted).toBeFalsy();
    
  });

  const setData = wrapper => wrapper.setData({
    dice:{
        name: 'D12',
        sides:'1D20'
    }
  });

  const reSetData = wrapper => wrapper.setData({
    dice:{
        name: '',
        sides:''
    }
  });
});

  