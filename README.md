# Template
Template as Service, get over ajax, backend service for frontend, based on nodejs

## Solution for single page nad multitemplates
With separated pages for any type of content: css, js, html
is more easy to change and create optimized webpage.

## Example

### filesystem

    + cmd
        + default.css
        + default.js
        + default.html


### json config file

    template.json

        {
            include: [
                'cmd/default.css',
                'cmd/default.js',
                'cmd/default.html',
            ]
        }