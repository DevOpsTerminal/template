## Template
Template as Service, get over ajax, backend service for frontend, based on nodejs

Solutions for make uniq content, for uniqe logic on frontend.
No more big files!

## Another projects
This project is working together with:
+ [frontend](https://devopsterminal.github.io/frontend/)
+ [backend](https://devopsterminal.github.io/backend/)



## Solution for single page nad multitemplates
With separated pages for any type of content: css, js, html
is more easy to change and create optimized webpage.
The main page has all the content with ddifferent solutions to combine it.
The render funktion can include the files with usage the tags:
    + iframe-url
    + script-content
    + script-url
    + script-var-json
    + link-url
    + style-content

All that files are included with different method.

# Standard
This is new standard for use separated files.
The files can be rendered on backend or on frontend

Each file has just one responsibility,
e.g.
One Js-function in one file: function_name.js


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
                'css/cmd/default.css' : 'include',
                'js/cmd/default.js': 'include',
                'html/cmd/default.html': 'include',
                'data/menu.json': 'script-var-json',
                'js/function/short_description_with_whole_words.js': 'script-content'
            ]
        }