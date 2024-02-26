import { Wrapper } from "@/components/Header/Header.styled";
import { Input } from "@/components/Input/Input";
import { Logo } from "@/components/Logo/Logo";

function Header() {
    return (
        <Wrapper>
            <Logo />
            <Input />
        </Wrapper>
    );
}

export { Header };
