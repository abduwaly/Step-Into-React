import React from 'react';
import { connect } from 'dva';
import { DatePicker } from 'antd'

function HelloPage() {
  return (
    <div>
      Hello,AntDesign! Let's go!
    </div>
  );
}

HelloPage.propTypes = {
};

export default connect()(HelloPage);
