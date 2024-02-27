import { Rating, Typography } from '@mui/material'
import { Box, styled } from '@mui/system'
import Image from 'next/image'
import React from 'react'
const SinglewrapcrtFeed = styled(Box)`
    .mainwrap-singlcrtfeed{
        position: relative;
        .top-partInnrimg{
            display: flex;
            margin-bottom: 20px;
            i{
                width: 60px;
                img{
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                }
            }
            .clientnameStart{
                width: calc(100% - 60px);
                padding-left: 20px;
                span{
                    font-size: 20px;
                    font-weight: 600;
                    color: var(--color343641);
                    display: inline-block;
                    margin-bottom: 4px;
                }
            }
        }
    }
`
interface clientfeedProps{
    clientimg: string,
    clientname: string,
    clientrating:number,
    clintmsg: string,
}
export default function SingleclientFdbck(props: clientfeedProps) {

    const [value, setValue] = React.useState<number | null>(2);
  return (
    <SinglewrapcrtFeed>
        <Box className="mainwrap-singlcrtfeed">
            <Box className="top-partInnrimg">
                <i><Image src={props.clientimg} width={60} height={60} alt='userimage'/></i>
                <Box className="clientnameStart">
                    <Typography variant='caption'>{props.clientname}</Typography>
                    <Box className="star-rating">
                    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">Rating</Typography>
      <Rating
   
        name="simple-controlled"
        value={props.clientrating}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    

    </Box>
                    </Box>
                </Box>
            </Box>
            <Box className="clientmsg-txt">
                <Typography variant='body1'>{props.clintmsg}</Typography>
            </Box>
        </Box>
    </SinglewrapcrtFeed>
  )
}
