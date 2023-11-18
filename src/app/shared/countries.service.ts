import { Injectable } from '@angular/core';
import { Country } from './types/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private countries: Country[] = [
    {
      nativeName: "Belgium", flagPath: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAgVBMVEUAaz/RBSX60gkCBQHHACf30gsAaT8AAAD/2QljUwP91An/1wn/2gn/3AnLqgnzzAl2YwR9aQXPrgmFbwUNDQHUsgiKdAcfGwPZtgiQeQaXfgYxKgDgvAidhAc7MgJWSAQtJgW4mwjrxQtbTASnjQYVEgBqWQTBogdKPwMbFwOulQj9okQiAAADzUlEQVR4nO3aa2/aQBCFYRfajrtrA4EkNoRLCAES/v8PrMFcbAYTqKo9I+U83xoh1Xm1g9fORj/oXIS+AIPYRGMTjU00NtHYRGMTjU00NtHYRGMTjU00NtHYRGMTjU00NtHYRGMTjU00NtHYRGMTjU00NtHYRGMTjU00NtHYRGMTjU00NtHYRGMTjU00NtHYRGMTjU00NtHYRGMTjU00NtHYRGMTjU00NtHYRGMTjU00NtHYRGMTjU00NtHYRGMTLfpJ56JfRviNR1/CQdQywolDX8KBlSauIx0rUaw0iXvSi9EXsWeliRMxMzxGmhSj0zYzPEaaxA9Fkwcjw2OkiZeiiXj0ZZRsNHF9abfb0rcxPDaaxINdk4GN4bHRxD/umjzaGB4TTdzTNkkR5cnE8JhoEj/vmzybGB4TTXy2b5KZGB4LTVxeJimi5BaGx0KTeHhsMrQwPBaapNmxSZaiL6ZloslpdIwMj4EmflRpMjLwLWugSfJSafKSoC/HQhM3PiUpoozxw4Nv4ie1JhP88IRr4uLL0mmtyTRt+Fy49ROsictniz8XVZMUUS5/aDELd0cKt078+FUuatdd/tDrONxMBfw+ccWj3nmA20jxcBjwqzfod2za+acoIp2g29uw9x3fnd0fRWbdsPeiwPdil07uXCoikzTwliX4/iTOs3uiSJYHf1QOv2dzrnfzUhHpufD7WsQ+Np3fGEVkjnh3ANnbx2/TW6LI9A3yignzvOPi4ZdLRWQYclNSgXoGTPtfRBHpo965wZ6LfXdxpYrIIvCmpAL3rsCl741RRN5Db0oqkO9P4vHychRZjpHv77HvlBoWigj0qpBN/LxxdubIt23Q2Vk1Nll919lxV75jkW+qgU38+sq9eA0cHmCTuHelCfKwLLBJ8+iAhwe4Z+ucvbCv/wt4WBbXpD46IrPaskEOD3CdVBuIrNN1/QffcJ3URkc+iic+3/2o/gg3PLAm29PkxzUxSrYBXDI6LRXgSXNYk+T468syPxywSPLjU6EI7NQFqkl5mnz3u69ap/2Zb60OrXAnzVFNytPk2ySb+uu0dLOPgjtpjmriyyGRF/UaOn4rzy3JErW9BzUpT5OLDLweEOcHu6UCO2kOarI7Td74t/Hyb+2wk+aoJpmUm5LLdlsVyb5VE5eLyCRpng2XTIpPgA7LYprEQ/nMr+8/kvwTddIc0ySVlfvqruLdSjB/9YI08fnmhj/fuHSTQ27H0W+E6Lb/9saP/W8REREREREREREREREREREREREREREREREREREREREREdGd/gJ1A/AYizgspgAAAABJRU5ErkJggg==", population: 120, capital: "Greater Accra", currency: "Euro",
      region: "Africa", subRegion: "West Africa", topLevelDomain: ".com", languagues: ["English", "French", "Asia"]
    },
    {
      nativeName: "Nigeria", flagPath: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAACVBMVEUAh1H///8Ag0opPY63AAABX0lEQVR4nO3QQQ0AIAzAwIF/0Yi4ZA/Sc9DObLlnzV2L2tM+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+8uW+B3AYRFPn9q1JAAAAAElFTkSuQmCC", population: 120, capital: "Lagos", currency: "Euro",
      region: "Africa", subRegion: "West Africa", topLevelDomain: ".com", languagues: ["English", "French", "Asia"]
    },
  ];

  constructor() { }

  public get countryList() {
    return this.countries.slice();
  }
}
