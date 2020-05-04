import { render, cleanup } from '@testing-library/svelte';
import '@testing-library/jest-dom/extend-expect';
import Icon from '../src/components/Icon.svelte';
import { android } from '../src/icons';

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

  // test('should change button text after click', async () => {
  //   const { getByText } = render(App, { props: { name: 'world' } })

  //   fireEvent.click(getByText('Button Text'))

  //   const button = await waitForElement(() => getByText('Button Clicked'))

  //   expect(button).toBeInTheDocument()
  // })
});
