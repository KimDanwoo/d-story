import { beforeEach, describe, expect, it, vi } from 'vitest'

import './button'

describe('버튼 컴포넌트 테스트', async () => {
  function getInsideButton(): HTMLElement | null | undefined {
    return document.body.querySelector('base-button')?.shadowRoot?.querySelector('button')
  }

  let onClickMock = vi.fn()
  beforeEach(() => {
    document.body.innerHTML = `<base-button label="click me" color="primary" size="md" type="basic"></base-button>`

    const buttonElement = document.body.querySelector('base-button')
    if (buttonElement) {
      buttonElement.onClick = onClickMock
    }
  })

  it('label props 전달', () => {
    getInsideButton()
    const button = document.body.querySelector('base-button')?.shadowRoot
    expect(button?.innerHTML).toContain('click me')
  })

  it('size 전달', () => {
    getInsideButton()
    const button = document.body.querySelector('base-button')?.shadowRoot
    expect(button?.innerHTML).toContain('button--md')
  })

  it('color props 전달', () => {
    getInsideButton()
    const button = document.body.querySelector('base-button')?.shadowRoot
    expect(button?.innerHTML).toContain('button--primary')
  })

  it('onClick 함수가 호출되는지 확인', () => {
    const button = getInsideButton()
    button?.click()
    expect(onClickMock).toHaveBeenCalled()
  })

  it('disabled 일 때 클릭이 안되는지 확인', () => {
    const baseButton = document.body.querySelector('base-button')
    if (baseButton) {
      baseButton.disabled = true
    }

    const button = getInsideButton()
    button?.click()

    expect(onClickMock).not.toHaveBeenCalled()
  })
})
