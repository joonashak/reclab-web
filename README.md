# reclab-web

This app implements the Recover Laboratory website frontend.

## Deployment Strategy

Gatsby is used to populate the site with CMS data at build time. To achieve convenient re-deployments upon content changes, a webhook must be set-up for the CMS backend to trigger re-deployment. The project is configured for Vercel static site hosting.

## CMS Backend

To develop and build this project, [reclab-cms](https://github.com/joonashak/reclab-cms) is required. For development, you should run the CMS on your local system. Clone the repository and follow the instructions therein.

## Usage

### Development

Launch the development environment *(make sure you have the CMS up first)*:

```bash
gatsby develop
```
