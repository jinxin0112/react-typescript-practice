import { ComponentType } from 'react';
import { Omit } from 'yargs';

const withDefaultProps = <P extends object, DP extends Partial<P> = Partial<P>>(
    defaultProps: DP,
    Component: ComponentType<P>
) => {

    type RequiredProps = Omit<P, keyof DP>;
    type Props = Partial<DP> & Required<RequiredProps>;

    Component.defaultProps = defaultProps;

    return (Component as ComponentType<any>) as ComponentType<Props>;
};

// Partial 是将传入的属性变为可选项

export default withDefaultProps;
