import React, { useEffect } from "react";

import { Snackbar, SnackbarContent, InfoWrapper } from "./style";

function SimpleSnackbar({ status, msg }) {
	const [open, setOpen] = React.useState(true);
	useEffect(() => {
		setOpen(true);
	}, [status]);

	function handleClose(event, reason) {
		if (reason === "clickaway") {
			return;
		}
		setOpen(false);
	}

	return (
		<Snackbar
			anchorOrigin={{
				vertical: "bottom",
				horizontal: "center"
			}}
			open={open}
			autoHideDuration={2000}
			onClose={handleClose}
			style={{ zIndex: 9999999 }}
		>
			<SnackbarContent
				status={status}
				contentprops={{
					"aria-describedby": "message-id"
				}}
				// prettier-ignore
				message={(
          <InfoWrapper id='message-id'>
            {msg || status}
          </InfoWrapper>
        )}
			/>
		</Snackbar>
	);
}
export default SimpleSnackbar;
