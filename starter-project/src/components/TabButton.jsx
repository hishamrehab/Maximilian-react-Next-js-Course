export const TabButton = ({ children, onSelect }) => {
    console.log('TabButton Component Executing');
    return (
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>
    )
}
