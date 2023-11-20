import { NgModule } from "@angular/core";

import { PopulationPipe } from "./pipe/population.pipe";

@NgModule({
  declarations: [
    PopulationPipe
  ],
  exports: [
    PopulationPipe
  ]
})
export class SharedModule {}
