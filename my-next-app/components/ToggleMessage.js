import { useState } from 'react';

export default function ToggleMessage() {
    const [isVisible, setIsVisible] = useState(false);

    return (
    <div>
        <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide' : 'Show'} ToggleMessage
        </button>
        {isVissible && <p>This is a conditional message!</p>}
    </div>
    );
}