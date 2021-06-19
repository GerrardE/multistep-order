interface IProps {
    config: {
        buttonType?: string,
        buttonId?: string,
        buttonClassName?: string,
        buttonOnClick?: React.MouseEventHandler<HTMLButtonElement>
    },
    children?: React.ReactChild | string | React.ReactElement | any
}

export default IProps;
