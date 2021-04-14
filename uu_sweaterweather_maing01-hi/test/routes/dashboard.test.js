import UU5 from "uu5g04";
import UuSweaterweather from "uu_sweaterweather_maing01-hi";

const { shallow } = UU5.Test.Tools;

describe(`UuSweaterweather.Routes.Dashboard`, () => {
  it(`default props`, () => {
    const wrapper = shallow(<UuSweaterweather.Routes.Dashboard />);
    expect(wrapper).toMatchSnapshot();
  });
});
