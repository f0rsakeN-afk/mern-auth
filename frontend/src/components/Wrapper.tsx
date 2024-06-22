interface Props {
    children: React.ReactNode
}

const Wrapper: React.FC<Props> = ({ children }) => {
    return (
        <div className="flex flex-col space-y-1">
            {children}
        </div>
    )
}

export default Wrapper;