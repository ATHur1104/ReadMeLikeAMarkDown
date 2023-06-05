const licenses = [
    {
        license: "None",
        badge:
            "None",
        permission: "None"
    },
    {
        license: "Apache 2.0 License",
        badge:
            "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)",
        permission: "https://opensource.org/licenses/Apache-2.0"
    },
    {
        license: "Boost Software License 1.0",
        badge:
            "![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)",
        permission: "https://www.boost.org/LICENSE_1_0.txt"
    },
    {
        license: "BSD 3-Clause License",

        badge: "![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)",
        permission: "https://opensource.org/licenses/BSD-3-Clause"
    },
    {
        license: "BSD 2 - Clause License",
        badge:
            "![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)",
        permission: "https://opensource.org/licenses/BSD-2-Clause",
    },
    {
        license: "CC0",
        badge:
            "![License: CC0 - 1.0](https://licensebuttons.net/l/zero/1.0/80x15.png) ![License: CC0 - 1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)",
        permission: "http://creativecommons.org/publicdomain/zero/1.0/",
    },
    {
        license: "Attribution 4.0 International",
        badge:
            "![License: CC BY 4.0](https://licensebuttons.net/l/by/4.0/80x15.png) ![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)",
        permission: "https://creativecommons.org/licenses/by/4.0/",
    },
    {
        license: "Attribution - ShareAlike 4.0 International",
        badge:
            "![License: CC BY - SA 4.0](https://licensebuttons.net/l/by-sa/4.0/80x15.png) ![License: CC BY - SA 4.0](https://img.shields.io/badge/License-CC_BY--SA_4.0-lightgrey.svg)",
        permission: "https://creativecommons.org/licenses/by-sa/4.0/",
    },
    {
        license: "Attribution - NonCommercial 4.0 International",
        badge:
            "![License: CC BY - NC 4.0](https://licensebuttons.net/l/by-nc/4.0/80x15.png) ![License: CC BY - NC 4.0](https://img.shields.io/badge/License-CC_BY--NC_4.0-lightgrey.svg)",
        permission: "https://creativecommons.org/licenses/by-nc/4.0/",
    },
    {
        license: "Attribution - NoDerivatives  4.0 International",
        badge:
            "![License: CC BY - ND 4.0](https://licensebuttons.net/l/by-nd/4.0/80x15.png) ![License: CC BY - ND 4.0](https://img.shields.io/badge/License-CC_BY--ND_4.0-lightgrey.svg)",
        permission: "https://creativecommons.org/licenses/by-nd/4.0/",
    },
    {
        license: "Attribution - NonCommercial - ShareAlike 4.0 International",
        badge:
            "![License: CC BY - NC - SA 4.0](https://licensebuttons.net/l/by-nc-sa/4.0/80x15.png) ![License: CC BY - NC - SA 4.0](https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-lightgrey.svg)",
        permission: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
    },
    {
        license: "Attribution - NonCommercial - NoDerivatives 4.0 International",
        badge:
            "![License: CC BY - NC - ND 4.0](https://licensebuttons.net/l/by-nc-nd/4.0/80x15.png) ![License: CC BY - NC - ND 4.0](https://img.shields.io/badge/License-CC_BY--NC--ND_4.0-lightgrey.svg)",
        permission: "https://creativecommons.org/licenses/by-nc-nd/4.0/",
    },
    {
        license: "Eclipse Public License 1.0",
        badge:
            "![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)",
        permission: "https://opensource.org/licenses/EPL-1.0",
    },
    {
        license: "GNU GPL v3",
        badge:
            "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)",
        permission: "https://www.gnu.org/licenses/gpl-3.0",
    },
    {
        license: "GNU GPL v2",
        badge:
            "![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)",
        permission: "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
    },
    {
        license: "GNU AGPL v3",
        badge:
            "![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)",
        permission: "https://www.gnu.org/licenses/agpl-3.0",
    },
    {
        license: "GNU LGPL v3",
        badge:
            "![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)",
        permission: "https://www.gnu.org/licenses/lgpl-3.0",
    },
    {
        license: "GNU FDL v1.3",
        badge:
            "![License: FDL 1.3](https://img.shields.io/badge/License-FDL_v1.3-blue.svg",
        permission: "https://www.gnu.org/licenses/fdl-1.3",
    },
    {
        license: "The Organization for Ethical Source - The Hippocratic License 2.1",
        badge:
            "![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)",
        permission: "https://firstdonoharm.dev",
    },
    {
        license: "The Organization for Ethical Source - The Hippocratic License 3.0",
        badge:
            "![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)",
        permission: "https://firstdonoharm.dev",
    },
    {
        license: "IBM Public License Version 1.0",
        badge:
            "![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)",
        permission: "https://opensource.org/licenses/IPL-1.0",
    },
    {
        license: "ISC License(ISC)",
        badge:
            "![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)",
        permission: "https://opensource.org/licenses/ISC",
    },
    {
        license: "MIT License",
        badge:
            "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)",
        permission: "https://opensource.org/licenses/MIT",
    },
    {
        license: "Mozilla Public License 2.0",
        badge:
            "![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)",
        permission: "https://opensource.org/licenses/MPL-2.0",
    },
    {
        license: "Attribution License(BY)",
        badge:
            "![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)",
        permission: "https://opendatacommons.org/licenses/by/",
    },
    {
        license: "Open Database License(ODbL)",
        badge:
            "![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)",
        permission: "https://opendatacommons.org/licenses/odbl/",
    },
    {
        license: "Public Domain Dedication and License(PDDL)",
        badge:
            "![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)",
        permission: "https://opendatacommons.org/licenses/pddl/",
    },
    {
        license: "The Perl License",
        badge:
            "![License: Artistic - 2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)",
        permission: "https://opensource.org/licenses/Artistic-2.0",
    },
    {
        license: "The Artistic License 2.0",
        badge:
            "![License: Artistic - 2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)",
        permission: "https://opensource.org/licenses/Artistic-2.0",
    },
    {
        license: "SIL Open Font License 1.1",
        badge:
            "![License: Open Font - 1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)",
        permission: "https://opensource.org/licenses/OFL-1.1",
    },
    {
        license: "The Unlicense",
        badge:
            "![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)",
        permission: "http://unlicense.org/",
    },
    {
        license: "The Do What the Fuck You Want to Public License",
        badge:
            "![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)",
        permission: "http://www.wtfpl.net/about/",
    },
    {
        license: "The zlib / libpng License",
        badge:
            "![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)",
        permission: "https://opensource.org/licenses/Zlib",
    },
]
    module.exports = licenses