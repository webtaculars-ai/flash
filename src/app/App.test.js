import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/svelte'

import App from './App.svelte'

test('renders without crashing', () => {
  render(App)
  expect(screen.getByText('flash.comma.ai')).toBeInTheDocument()
})