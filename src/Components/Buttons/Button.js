import React from 'react'
import MuiButton from '@material-ui/core/Button'

export default function Button(props) {
    //   onClick method and children will be passed in props
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'

        }}>
            <MuiButton
                variant="contained"
                color="secondary"
                onClick={props.clicked}
            >
                {props.children}
            </MuiButton>
        </div>
    )
}
