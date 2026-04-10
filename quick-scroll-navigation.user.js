// ==UserScript==
// @name         Quick Scroll Navigation
// @namespace    https://tampermonkey.net/
// @version      1.0.0
// @description  在任意网页快速跳转到顶部、中部、底部
// @author       Codex
// @match        http://*/*
// @match        https://*/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
  'use strict';

  const PANEL_ID = 'tm-quick-scroll-panel';

  if (document.getElementById(PANEL_ID)) {
    return;
  }

  const style = document.createElement('style');
  style.textContent = `
    #${PANEL_ID} {
      position: fixed;
      right: 20px;
      bottom: 20px;
      z-index: 2147483647;
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding: 10px;
      border-radius: 14px;
      background: rgba(18, 18, 18, 0.72);
      backdrop-filter: blur(10px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
    }

    #${PANEL_ID} button {
      width: 56px;
      height: 40px;
      border: none;
      border-radius: 10px;
      color: #fff;
      background: linear-gradient(135deg, #0f766e, #0ea5e9);
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      transition: transform 0.15s ease, opacity 0.15s ease;
    }

    #${PANEL_ID} button:hover {
      transform: translateY(-1px);
      opacity: 0.95;
    }

    #${PANEL_ID} button:active {
      transform: translateY(1px);
    }

    @media (max-width: 768px) {
      #${PANEL_ID} {
        right: 12px;
        bottom: 12px;
        padding: 8px;
      }

      #${PANEL_ID} button {
        width: 50px;
        height: 36px;
        font-size: 12px;
      }
    }
  `;

  const panel = document.createElement('div');
  panel.id = PANEL_ID;

  const actions = [
    {
      label: '顶部',
      title: '跳转到页面顶部',
      onClick: () => scrollToPosition(0),
    },
    {
      label: '中部',
      title: '跳转到页面中部',
      onClick: () => scrollToPosition(getMiddlePosition()),
    },
    {
      label: '底部',
      title: '跳转到页面底部',
      onClick: () => scrollToPosition(getBottomPosition()),
    },
  ];

  function getScrollRoot() {
    return document.scrollingElement || document.documentElement;
  }

  function getBottomPosition() {
    const root = getScrollRoot();
    return Math.max(0, root.scrollHeight - window.innerHeight);
  }

  function getMiddlePosition() {
    return Math.floor(getBottomPosition() / 2);
  }

  function scrollToPosition(top) {
    window.scrollTo({
      top,
      behavior: 'smooth',
    });
  }

  actions.forEach((action) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = action.label;
    button.title = action.title;
    button.addEventListener('click', action.onClick);
    panel.appendChild(button);
  });

  document.head.appendChild(style);
  document.body.appendChild(panel);
})();
