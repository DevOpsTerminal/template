# Template
Template as Service, get over ajax, backend service for frontend, based on nodejs

## Solution for single page nad multitemplates
With separated pages for any type of content: css, js, html
is more easy to change and create optimized webpage.

## Example

### filesystem

    + cmd
        + default.css
        + render.js
        + default.js
        + default.html
        + data.json


### json config file, template.json


        {
            format: 'file_path-render_type'
            data: {
                'cmd/default.css' : 'include',
                'cmd/default.js': 'include',
                'cmd/default.html': 'include',
                'data.json': 'script-var',
            ]
        }