import React from 'react';
import { ThemeConsumer } from "../contexts/theme";

export default function Nav() {
    return (
        // This pattern is sometimes referred to as the render prop pattern.
        // We can grab the value here because it was set as the provider's value prop
        <ThemeConsumer>
            {({ theme, toggleTheme }) => (
                <nav className={'row space-between'}>
                    <button
                        style={{fontSize: 30}}
                        className={'btn-clear'}
                        onClick={toggleTheme}
                    >
                        {theme === 'light' ? '🔦' : '💡'}
                    </button>
                </nav>
            )}
        </ThemeConsumer>
    )
}