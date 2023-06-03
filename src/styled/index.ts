import styled from 'styled-components';
import StyledText from './lib/StyledText/StyledText';
import Box from './lib/Box/Box';

// When creating new components start each separate property with capital letter
// e.g. CenSpbtwColFlex: Cen - 'center' (align-items), Spbtw - 'space-between' (justify-content), Col - 'column' (flex-direction) etc.
export const Flex = styled(Box)({ display: 'flex' });
export const ColFlex = styled(Flex)({ flexDirection: 'column' });
export const RowFlex = styled(Flex)({ flexDirection: 'row' });
export const CenSpbtwRowFlex = styled(RowFlex)({
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const Title1Bold = StyledText(8, 7, 2);
export const Title1Regular = StyledText(8, 7);

export const Title2Bold = StyledText(7, 6, 2);
export const Title2Regular = StyledText(7, 6);

export const Title3Bold = StyledText(6, 5, 2);
export const Title3Regular = StyledText(6, 5);

export const HeadlineSemibold = StyledText(5, 4, 1);
export const HeadlineRegular = StyledText(5, 4);

export const BodySemibold = StyledText(4, 3, 1);
export const BodySemiboldUnderline = StyledText(4, 3, 1, 'underline');
export const BodyRegular = StyledText(4, 3);
export const BodyRegularUnderline = StyledText(4, 3, 0, 'underline');

export const SubheadlineSemibold = StyledText(3, 2, 1);
export const SubheadlineSemiboldUnderline = StyledText(3, 2, 1, 'underline');
export const SubheadlineRegular = StyledText(3, 2, 0);
export const SubheadlineRegularUnderline = StyledText(3, 2, 0, 'underline');

export const FootnoteSemibold = StyledText(2, 1, 1);
export const FootnoteRegular = StyledText(2, 1);

export const Caption1Semibold = StyledText(1, 1, 1);
export const Caption1Regular = StyledText(1, 1);

export const Caption2Semibold = StyledText(0, 0, 1);
export const Caption2Regular = StyledText(0, 0);

export { Text } from './lib/Text/Text';
export { Image } from './lib/Image/Image';
export { Box } from './lib/Box/Box';
export { StyledText } from './lib/StyledText/StyledText';
export { Divider } from './lib/Divider/Divider';
export { default as mainTheme } from './lib/theme/main';
export * from './lib/theme/main';
