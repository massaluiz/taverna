import Tests from '../Tests';
import { shallowMount } from "@vue/test-utils";
import TDiceList from '../../src/components/shared/dices/TDiceList';

describe('This session is to test the component TDiceList', () => {

  let wrapper;

  beforeAll(() => {

    wrapper = shallowMount(TDiceList);

  });

  test('is a Vue instance', () => {

    expect(wrapper.isVueInstance()).toBeTruthy()
  });

  test('Roll a Dice', () => {

    let dice = { name: 'D12', sides:'1D12'};
    expect(wrapper.vm.rollDice(dice)).toBeGreaterThan(1);
    expect(wrapper.vm.rollDice(dice)).toBeLessThan(12);
    
  });
});

  