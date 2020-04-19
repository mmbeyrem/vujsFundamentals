import Vue from "vue";
import Router from "vue-router";
import HomePage from "../home/HomePage.vue";
import RobotBuilder from "../build/RobotBuilder.vue";
import PartInfo from "../parts/partInfo.vue";
import BrowseParts from "../parts/browseParts.vue";
import RobotHeads from "../parts/RobotHeads.vue";
import RobotArms from "../parts/RobotArms.vue";
import RobotTorsos from "../parts/RobotTorsos.vue";
import RobotBases from "../parts/RobotBases.vue";
import SideBarStandard from "../sideBars/sidebarStandard.vue";
import Sidebarbuild from "../sideBars/sidebarBuild.vue";
import shoppingCart from "../cart/shoppingCart.vue";


Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/parts/browse",
      name: "BrowseParts",
      component: BrowseParts,
      children: [
        {
          path: "heads",
          name: "BrowseHeads",
          component: RobotHeads
        },
        {
          path: "arms",
          name: "BrowseArms",
          component: RobotArms
        },
        {
          path: "torsos",
          name: "BrowseTorsos",
          component: RobotTorsos
        },
        {
          path: "bases",
          name: "BrowseBases",
          component: RobotBases
        }
      ]
    }, {
      path: "/parts/:partType/:id",
      name: "Parts",
      component: PartInfo,
      props: true
    },
    {
      path: "/",
      name: "Home",
      components: { default: HomePage, sidebar: SideBarStandard }
    },
    {
      path: "/build",
      name: "build",
      components: { default: RobotBuilder, sidebar: Sidebarbuild }
    },
    {
      path: "/cart",
      name: "Cart",
      components: { default: shoppingCart, sidebar: SideBarStandard }
    }
  ]
});
