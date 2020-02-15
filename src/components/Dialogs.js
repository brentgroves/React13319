import React from 'react';

import {Sproc200206Dialog} from "../containers/Sproc200206Dialog";

export default function Dialogs({ openSproc200206Dialog  }) {
return(
  <div>
  {openSproc200206Dialog  &&
  <React.Fragment>

  <Sproc200206Dialog />
  </React.Fragment >
}
  </div>
)
}
