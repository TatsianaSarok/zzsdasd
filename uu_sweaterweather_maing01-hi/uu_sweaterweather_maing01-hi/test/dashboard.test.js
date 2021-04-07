import UU5 from "uu5g04";
import UuSweaterweatherMainHi from "uu_sweaterweather_maing01-hi";

const { shallow } = UU5.Test.Tools;

describe(`UuSweaterweatherMainHi.Dashboard`, () => {
  it(`default props`, () => {
    const wrapper = shallow(<UuSweaterweatherMainHi.Dashboard />);
    expect(wrapper).toMatchSnapshot();
  });
});
