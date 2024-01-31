import { Button, ButtonProps } from "@chakra-ui/react"
import { ReactNode } from "react"

interface IButton extends ButtonProps {
    children: ReactNode
}

const DefaultButton = ({children}: IButton) => {
    return <Button borderRadius={'full'} >{children}</Button>
}

export { DefaultButton}