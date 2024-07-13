import { Box, Typography } from "@mui/material"

export const Footer = () => {
  return (
    <Box component='footer'>
      <Box className="flex items-center justify-center gap-1 py-6">
        <img src="./shield.svg" alt="shield" />
        <Typography>Pagamento 100% seguro via:</Typography>
        <img className="mb-[3px]" src="./footer-logo.svg" alt="logo" />
      </Box>
    </Box>
  )
}