interface Props {
    text: string
}
const Label = ({ text }: Props) => {
    return (
        <label className="text-gray-800 capitalize">{text}</label>
    )
}

export default Label