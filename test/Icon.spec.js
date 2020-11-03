import { render, cleanup } from '@testing-library/svelte';
import '@testing-library/jest-dom/extend-expect';
import Icon from '../src/components/Icon.svelte';
import { android, fa } from '../src/icons';
import { faAddressBook } from '@fortawesome/free-regular-svg-icons';

beforeEach(cleanup); // this is required.
describe('Icon', () => {
  test('should configure viewBox from data', () => {
    const { container } = render(Icon, { props: { data: android } });
    expect(container.querySelector('svg').getAttribute('viewBox')).toBe(`0 0 ${android.android.width} ${android.android.height}`);
    expect(container.querySelector('svg').getAttribute('role')).toBe('presentation');
  });

  test('should configure default class', () => {
    const { container } = render(Icon, { props: { data: android } });
    expect(container.querySelector('svg').getAttribute('class')).toContain('fa-icon');
  });

  test('should configure custom class', () => {
    const { container } = render(Icon, { props: { data: android, class: 'test' } });
    expect(container.querySelector('svg').getAttribute('class')).toContain('fa-icon test');
  });

  test('should configure label', () => {
    const { container } = render(Icon, { props: { data: android, label: 'custom-label' } });
    expect(container.querySelector('svg').getAttribute('aria-label')).toBe('custom-label');
    expect(container.querySelector('svg').getAttribute('role')).toBe('img');
  });

  test('should configure custom style', () => {
    const { container } = render(Icon, { props: { data: android, style: 'color: #bada55' } });
    expect(container.querySelector('svg').getAttribute('style')).toBe('color: #bada55');
  });

  test('should configure custom width', () => {
    const { container } = render(Icon, { props: { data: android, width: 10 } });
    expect(container.querySelector('svg').getAttribute('viewBox')).toBe(`0 0 10 ${android.height}`);
  })

  test('should render font awesome 5 icon', () => {
    const { container } = render(Icon, { props: { data: faAddressBook } });
    const svg = container.querySelector('svg');
    console.log(svg.outerHTML);
    expect(svg.getAttribute('viewBox')).toBe(`0 0 ${faAddressBook.icon[0]} ${faAddressBook.icon[1]}`);
    const paths = svg.getElementsByTagName('path');
    expect(paths.length).toBe(1);
    expect(paths[0].getAttribute('d')).toBe(faAddressBook.icon[4]);
  });

});
