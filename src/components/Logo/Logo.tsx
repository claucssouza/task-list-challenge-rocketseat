import RocketLogo from '@/assets/rocket';
import { Wrapper } from '@/components/Logo/Logo.styled';

function Logo () {
    return (
        <Wrapper>
          <RocketLogo />          
          <span>to</span>
          <span>do</span>
        </Wrapper>
    );
}

export { Logo };
