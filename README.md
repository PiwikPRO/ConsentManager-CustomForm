# Piwik PRO Consent Manager Custom Form

Use Consent Manager JavaScript API to serve your own custom consent forms, overriding Piwik PRO consent templates.
  
Thanks to that you’ll be able to build own consents form with the behavior you expect.
  
Please take a look at our documentation about [Consent Manager JavaScript API](https://developers.piwik.pro/en/latest/consent_manager/api.html) for more details.

## Screenshots

Consent Manager Custom Form

![Screenshot 1](/screenshot1.png?raw=true)

Individual choices drop-down

![Screenshot 2](/screenshot2.png?raw=true)

## Installation

### JavaScript API
Enable Custom Consent Form on your website. For more details read: [Consent Manager Settings](https://help.piwik.pro/support/consent-manager/setting-consent-manager/)

### Tracking Code
Get Piwik PRO Tracking Code for asynchronous tags and paste it directly under `<body>` HTML element on your site. For more details read: [Tracking Code Implementation](https://help.piwik.pro/support/getting-started/tracking-code-implementation/)

### Script
Include JS script before `</body>` HTML element on your site.

```
<script>
    var ppms_consenturl="https://cdn.piwik.pro/consent/1.0.0/form.html";
</script>
<script src="https://cdn.piwik.pro/consent/1.0.0/script.min.js" integrity="sha384-KaL5j/WWUCFA4phaT50M11gd/RAt968QIpB0d3bFGiPG0syZj39L/hU5eThiZRcU" crossorigin="anonymous"></script>
```

### Style
Include CSS style after `<head>` HTML element on your site.

```
<link rel="stylesheet" href='https://cdn.piwik.pro/consent/1.0.0/style.min.css' integrity="sha384-dDN56KdFuq4rR9Ee7gY9Pvx1zBMNtMKUMqoh/lQZd1dKzWU+YvMon3ILpiGZ08L/" crossorigin="anonymous" />
```

### Privacy Settings
Insert consent form link on your privacy policy page section that will display a popup with consent settings.

```
<button id="ppms_consent_link">Privacy settings</button>
```

### Example

```
<html>
    <head>
        <link rel="stylesheet" href='https://cdn.piwik.pro/consent/1.0.0/style.min.css' integrity="sha384-dDN56KdFuq4rR9Ee7gY9Pvx1zBMNtMKUMqoh/lQZd1dKzWU+YvMon3ILpiGZ08L/" crossorigin="anonymous" />
    </head>
    <body>
        <!-- paste Piwik PRO Tracking Code here -->
        
        <button id="ppms_consent_link">Privacy settings</button>
        
        <script>var ppms_consenturl='https://cdn.piwik.pro/consent/1.0.0/form.html';</script>
        <script src="https://cdn.piwik.pro/consent/1.0.0/script.min.js" integrity="sha384-KaL5j/WWUCFA4phaT50M11gd/RAt968QIpB0d3bFGiPG0syZj39L/hU5eThiZRcU" crossorigin="anonymous"></script>
    </body>
</html>
```

## License

GPL3.0+ see LICENSE.txt and AUTHORS.txt