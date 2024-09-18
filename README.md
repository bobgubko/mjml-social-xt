## mjml-social-xt

Fork of mj-social component with a few additional features.

New attributes:

`element-css-class`: CSS class to apply to `mj-social-element`'s `<table>`

`element-ghost-td-css-class`: CSS class to apply to `mj-social-element`'s parent ghost table


attribute                   | unit        | description                   | default value
----------------------------|-------------|-------------------------------|---------------------------
align                       | string      | left/right/center             | center
border-radius               | px          | border radius                 | 3px
color                       | color       | text color                    | #333333
css-class                   | string      | class name, added to the root HTML element created (which is `<tr>`) | n/a
container-background-color  | color       | inner element background color                     | n/a
**element-css-class**       | string      | CSS class for a table containing the content of the social button | n/a
**element-ghost-td-css-class**       | string      | CSS class for a ghost-cell containing the content of the social button. Ghost-cell is visible only in Outlook | n/a
font-family                 | string      | font name                     | Ubuntu, Helvetica, Arial, sans-serif
font-size                   | px/em       | font size                     | 13px
font-style                  | string      | font style                    | normal
font-weight                 | string      | font weight                   | normal
icon-height                 | percent/px  | icon height, overrides icon-size | icon-size
icon-size                   | percent/px  | icon size (width and height)  | 20px
inner-padding               | px          | social network surrounding padding                 | 4px
line-height                 | percent/px  | space between lines           | 22px
mode                        | string      | vertical/horizontal           | horizontal
padding                     | px          | supports up to 4 parameters                       | 10px 25px
padding-bottom              | px          | bottom offset                    | n/a
padding-left                | px          | left offset                      | n/a
padding-right               | px          | right offset                       | n/a
padding-top                 | px          | top offset                         | n/a
icon-padding                | px          | padding around the icons      | 0px
text-padding                | px          | padding around the texts      | 4px 4px 4px 0
text-decoration             | string      | underline/overline/none       | none

## Usage

```
import mjml2html from 'mjml'
import { registerComponent } from 'mjml-core'
import SocialXt from 'mjml-social-xt'

registerComponent(SocialXt)

const { html, errors } = mjml2html(mjmlString)
```
