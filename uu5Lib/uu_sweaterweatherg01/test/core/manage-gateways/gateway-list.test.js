import UU5 from "uu5g04";
import UuSweaterweather from "uu_sweaterweatherg01";

const { shallow } = UU5.Test.Tools;

describe(`UuSweaterweather.Core.ManageGateways.GatewayList`, () => {
  it(`default props`, () => {
    const wrapper = shallow(<UuSweaterweather.Core.ManageGateways.GatewayList />);
    expect(wrapper).toMatchSnapshot();
  });
});
