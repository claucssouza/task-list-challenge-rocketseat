import { Wrapper } from "@/components/Count/Count.styled";

type CountProps = {
    textCount: string;
}

function Count({ textCount }: CountProps) {
    
    return (
        <Wrapper>{textCount}</Wrapper>
    )

}

export { Count };
