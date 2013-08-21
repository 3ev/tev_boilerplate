# 3EV Boilerplate Extension

**Version:** 0.0.0

Frontend boilerplate for 3ev TYPO3 sites. Includes:

- SASS toolkit files (mixins etc)
- SASS template files (basic grid etc)
- JavaScript libraries
- JavaScript toolkit
- Require.js and R.js
- Common Partials and ViewHelpers

## Installation

Install into TYPO3 with Composer. Add the following config to your `composer.json`:

```json
{
    "require": {
        "3ev/tev_boilerplate": "master"
    },
    "repositories": {
        {
            "type": "vcs",
            "url": "https://github.com/3ev/tev_boilerplate"
        }
    },
    "extra": {
        "installer-paths": {
            "htdocs/typo3conf/ext/{$name}/": [
                "3ev/tev_boilerplate"
            ]
        }
    }
}
```

## Dependencies

- [TYPO3 Fluid Extensions](https://github.com/FluidTYPO3)
- [Phingy](https://github.com/3ev/phingy)
- [tev](https://github.com/3ev/tev)
