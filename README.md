# ASP Image Bank Explorer 
This is a lightweight tool to explore the open-licensed images in the [African Storybook Project](http://africanstorybook.org/) using keywords derived from the stories themselves.

## Usage
Just type a keyword into the search box. Try a few simple words like ["bird"](https://global-asp.github.io/imagebank/?bird), ["cat"](https://global-asp.github.io/imagebank/?cat), ["tree"](https://global-asp.github.io/imagebank/?tree), ["lion"](https://global-asp.github.io/imagebank/?lion), or ["river"](https://global-asp.github.io/imagebank/?river) to get a sense of what sort of images can be found.

Attribution and license information for individual images is displayed by hovering over the search image results.

To change the search language, you can use the language switcher dropdown to the right of the search bar, or you can link to that language directly using the [API](#api).

# API
Specific image searches can be linked to directly by using the simple API -- just add your term after a question mark appended to the end of the URL, e.g.:

    https://global-asp.github.io/imagebank/?elephant

To search in a specific language, you can specify it using the "lang" parameter, e.g.:

    https://global-asp.github.io/imagebank/?lang=sw

After visiting the page with this link, subsequent searches will use Swahili as the default language.

If you want to specify both a language and a search term, you can use the "q" search query parameter along with "lang":

    https://global-asp.github.io/imagebank/?lang=sw&q=mamba

This will load the Imagebank Explorer and show results for the term "mamba" in Swahili.

## Supported languages
The [ASP image bank](https://github.com/global-asp/asp-imagebank) was created as a byproduct of extracting source stories from ASP pdfs for the [Global African Storybook Project](https://global-asp.github.io/).

A [multilingual corpus of texts](https://github.com/global-asp/asp-source) from the African Storybook Project and [Global-ASP](https://github.com/global-asp/global-asp) has been used to create the wordlists, which cover all 60+ African languages included in the ASP corpus, and all 16 languages in the Global-ASP corpus. In some cases, [custom stoplists](https://github.com/dohliam/more-stoplists) and parsing tools have been created to facilitate this process.

Any language can be supported by the Imagebank Explorer. If a language is not currently included, it can be added by first contributing translations of stories into that language to one of the two ASP projects in order to create a corpus of translated text. That corpus will then be automatically processed so that the language can be added to this project.

## License
MIT license -- see LICENSE file for details.

All of the images in the [ASP Image Bank](https://github.com/global-asp/asp-imagebank) are released under a [Creative Commons](https://creativecommons.org/) license, either CC-BY or CC-BY-NC, in accordance with the license of the original stories from which they were extracted. See the [ASP Image Bank](https://github.com/global-asp/asp-imagebank) repo for details on the individual image licenses.

[Tacit CSS](https://github.com/yegor256/tacit/) by Yegor Bugayenko is licensed under MIT.
