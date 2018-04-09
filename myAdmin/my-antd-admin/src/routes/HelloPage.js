import React from 'react';
import { connect } from 'dva';
import { DatePicker } from 'antd'

function HelloPage() {
  return (
    <div>
      Hello,AntDesign!
    </div>
  );
}

HelloPage.propTypes = {
};

export default connect()(HelloPage);
