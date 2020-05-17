import Tests from '../Tests';
import { shallowMount } from "@vue/test-utils";
import TCardImage from '../../src/components/shared/cards/TCardImage';

describe('TCardImage', () => {
    const wrapper = shallowMount(TCardImage, {
        propsData: {
            name: '',
            src: '',
            desc: '',
            hitDice: '1d12',
            profSavingThrows: ''
        } 
      })
      it('exist Dice Hit field', () => {
        expect(wrapper.html()).toContain('<span class="bold">Dice Hit:</span>');
      })
  })