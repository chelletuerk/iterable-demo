import React from 'react'
import { Parser } from 'html-to-react'


const rawHTML = `
<div>
  <html xmlns="http://www.w3.org/1999/xhtml" >

  <head>

  	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  	<meta name="viewport" content="width=device-width">

  	<meta http-equiv="X-UA-Compatible" content="IE=edge">

  	<title></title>


  	<style type="text/css">
  		body {
  			margin: 0;
  			padding: 0;
  		}

  		table,
  		td,
  		tr {
  			vertical-align: top;
  			border-collapse: collapse;
  		}

  		* {
  			line-height: inherit;
  		}

  		a[x-apple-data-detectors=true] {
  			color: inherit !important;
  			text-decoration: none !important;
  		}
  	</style>
  	<style type="text/css" id="media-query">
  		@media (max-width: 520px) {

  			.block-grid,
  			.col {
  				min-width: 320px !important;
  				max-width: 100% !important;
  				display: block !important;
  			}

  			.block-grid {
  				width: 100% !important;
  			}

  			.col {
  				width: 100% !important;
  			}

  			.col_cont {
  				margin: 0 auto;
  			}

  			img.fullwidth,
  			img.fullwidthOnMobile {
  				width: 100% !important;
  			}

  			.no-stack .col {
  				min-width: 0 !important;
  				display: table-cell !important;
  			}

  			.no-stack.two-up .col {
  				width: 50% !important;
  			}

  			.no-stack .col.num2 {
  				width: 16.6% !important;
  			}

  			.no-stack .col.num3 {
  				width: 25% !important;
  			}

  			.no-stack .col.num4 {
  				width: 33% !important;
  			}

  			.no-stack .col.num5 {
  				width: 41.6% !important;
  			}

  			.no-stack .col.num6 {
  				width: 50% !important;
  			}

  			.no-stack .col.num7 {
  				width: 58.3% !important;
  			}

  			.no-stack .col.num8 {
  				width: 66.6% !important;
  			}

  			.no-stack .col.num9 {
  				width: 75% !important;
  			}

  			.no-stack .col.num10 {
  				width: 83.3% !important;
  			}

  			.video-block {
  				max-width: none !important;
  			}

  			.mobile_hide {
  				min-height: 0px;
  				max-height: 0px;
  				max-width: 0px;
  				display: none;
  				overflow: hidden;
  				font-size: 0px;
  			}

  			.desktop_hide {
  				display: block !important;
  				max-height: none !important;
  			}

  			.img-container.big img {
  				width: auto !important;
  			}
  		}
  	</style>
  </head>

  <body class="clean-body" style="margin: 0; padding: 0; -webkit-text-size-adjust: 100%; background-color: #FFFFFF;">

  	<table class="nl-container" style="table-layout: fixed; vertical-align: top; min-width: 320px; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF; width: 100%;" cellpadding="0" cellspacing="0" role="presentation" width="100%" bgcolor="#FFFFFF" valign="top">
  		<tbody>
  			<tr style="vertical-align: top;" valign="top">
  				<td style="word-break: break-word; vertical-align: top;" valign="top">

  					<div style="background-color:transparent;">
  						<div class="block-grid " style="min-width: 320px; max-width: 500px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: transparent;">
  							<div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">


  								<div class="col num12" style="min-width: 320px; max-width: 500px; display: table-cell; vertical-align: top; width: 500px;">
  									<div class="col_cont" style="width:100% !important;">

  										<div style="border-top:0px dotted transparent; border-left:0px dotted transparent; border-bottom:0px dotted transparent; border-right:0px dotted transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">

  											<div class="img-container center  autowidth  fullwidth big" align="center" style="padding-right: 0px;padding-left: 0px;">
  												<a href="https://support.iterable.com/hc/en-us/articles/217517406-In-App-Messages-Overview" target="_blank" style="outline:none" tabindex="-1"><img class="center  autowidth  fullwidth" align="center" border="0" src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/669d5713-9b6a-46bb-bd7e-c542cff6dd6a/1e32ce3d4f5a4e8bb3640ffaacb391b4/ooohhhhh.gif" alt="Image" title="Image" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; width: 500px; max-width: 100%; display: block;" width="500"></a>

  											</div>

  											<div class="text_block" style="color:#555555;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
  												<div class="txtTinyMce-wrapper" style="font-size: 12px; line-height: 1.2; color: #555555; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14px;">
  													<p style="margin: 0; font-size: 14px; line-height: 1.2; word-break: break-word; mso-line-height-alt: 17px; margin-top: 0; margin-bottom: 0;">Congratulations, Chelle!&nbsp; You Just Completed The SA Challenge!</p>
  												</div>
  											</div>


  										</div>

  									</div>
  								</div>


  							</div>
  						</div>
  					</div>
  					<div style="background-color:transparent;">
  						<div class="block-grid " style="min-width: 320px; max-width: 500px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: transparent;">
  							<div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">


  								<div class="col num12" style="min-width: 320px; max-width: 500px; display: table-cell; vertical-align: top; width: 500px;">
  									<div class="col_cont" style="width:100% !important;">

  										<div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">


  											<div class="text_block" style="color:#555555;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
  												<div class="txtTinyMce-wrapper" style="font-size: 12px; line-height: 1.2; color: #555555; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14px;">
  													<p style="margin: 0; font-size: 14px; line-height: 1.2; word-break: break-word; mso-line-height-alt: 17px; margin-top: 0; margin-bottom: 0;">Please send your code and a screenshot of this page to your recruiter as well as enrico.capitan@iterable.com.</p>
  												</div>
  											</div>


  										</div>

  									</div>
  								</div>


  							</div>
  						</div>
  					</div>
  					<div style="background-color:transparent;">
  						<div class="block-grid " style="min-width: 320px; max-width: 500px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: transparent;">
  							<div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">


  								<div class="col num12" style="min-width: 320px; max-width: 500px; display: table-cell; vertical-align: top; width: 500px;">
  									<div class="col_cont" style="width:100% !important;">

  										<div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">

  											<div class="button-container" align="center" style="padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
  												<a href="mailto:YourRecruiter@iterable.com?subject=I%20Completed%20The%20Challenge!&body=I%20will%20attach%20my%20code%20soon%20%3A)" target="_blank" style="-webkit-text-size-adjust: none; text-decoration: none; display: inline-block; color: #ffffff; background-color: #3AAEE0; border-radius: 4px; -webkit-border-radius: 4px; -moz-border-radius: 4px; width: auto; width: auto; border-top: 1px solid #3AAEE0; border-right: 1px solid #3AAEE0; border-bottom: 1px solid #3AAEE0; border-left: 1px solid #3AAEE0; padding-top: 5px; padding-bottom: 5px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; text-align: center; mso-border-alt: none; word-break: keep-all;"><span style="padding-left:20px;padding-right:20px;font-size:16px;display:inline-block;letter-spacing:undefined;"><span style="font-size: 16px; line-height: 2; word-break: break-word; mso-line-height-alt: 32px;">You Rock!</span></span></a>

  											</div>

  										</div>

  									</div>
  								</div>


  							</div>
  						</div>
  					</div>

  				</td>
  			</tr>
  		</tbody>
  	</table>

  </body>

  </html>
</div>
`

const Iframe = () => {
  return (
    <div style={container}>
      {Parser().parse(rawHTML)}
    </div>
  )
}

export default Iframe

// Styling
const container = {
  width: 500,
  margin: 'auto',
}
