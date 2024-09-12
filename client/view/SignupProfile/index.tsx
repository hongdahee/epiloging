import {Container} from '../component/common/Container';
import {useNavigation} from '@react-navigation/native';
import {SignupHeader} from '../component/common/SignupHeader';

export const SignUpProfile = () => {
  return (
    <Container>
      <SignupHeader signupPage={false} title="프로필 설정" />
    </Container>
  );
};
