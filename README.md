# Piwik PRO Consent Manager Custom Form

**NOTE:** This repository is **DEPRECATED** and is no longer supported, please consider using [Piwik PRO Custom consent form example](https://developers.piwik.pro/en/latest/consent_manager/custom_consent_form/index.html#example-implementation) instead.

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
    var ppms_consenturl="https://example.com/path/to/form.html";
</script>
<script src="https://example.com/path/to/script.min.js"></script>
```

**Remember:** change `https://example.com/path/to/` to an appropriate path on your site. 

### Style
Include CSS style after `<head>` HTML element on your site.

```
<link rel="stylesheet" href="https://example.com/path/to/style.min.css" />
```

**Remember:** change `https://example.com/path/to/` to an appropriate path on your site.

### Privacy Settings
Insert consent form link on your privacy policy page section that will display a popup with consent settings.

```
<button id="ppms_consent_link">Privacy settings</button>
```

### Example

```
<html>
    <head>
        <link rel="stylesheet" href="https://example.com/path/to/style.min.css" />
    </head>
    <body>
        <!-- paste Piwik PRO Tracking Code here -->
        
        <button id="ppms_consent_link">Privacy settings</button>
        
        <script>var ppms_consenturl="https://example.com/path/to/form.html";</script>
        <script src="https://example.com/path/to/script.min.js"></script>
    </body>
</html>
```

**Remember:** change `https://example.com/path/to/` to an appropriate path on your site.

## Changelog

**1.1.8**

*Release date: 15.04.2021*
* Marked this repository as archived and read-only.

**1.1.7**

*Release date: 18.02.2021*
* Disabled support for cdn.

**1.1.6**

*Release date: 16.12.2020*
* Fixed `Agree all` Safari error.

**1.1.5**

*Release date: 28.10.2020*
* Fixed `i.status undefined` error.

**1.1.4**

*Release date: 20.10.2020*
* Fixed `Save selections` button.

**1.1.3**

*Release date: 16.10.2020*
* Fixed `Agree all` and `Reject all` buttons.

**1.1.2**

*Release date: 09.10.2020*
* Fixed `s.status undefined` error.

**1.1.1**

*Release date: 15.11.2019*
* Added `cookie expiration` information.

**1.1.0**

*Release date: 22.10.2019*
* Added `Reject all` button.
* Added `Hide message` button.

**1.0.1**

*Release date: 08.07.2019*
* Added support for older IE versions.

**1.0.0**

*Release date: 27.05.2019*
* First stable version.

## License

GPL3.0+ see [LICENSE.txt](LICENSE.txt) and [AUTHORS.txt](AUTHORS.txt)