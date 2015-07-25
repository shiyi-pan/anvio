var help_contents = {
	'load-state-button': 'Load a previously stored visual state from the profile database',
    'save-state-button': 'Save a snapshot of all user settings for layers into the profile database',
    'layers-tab': 'Access to all visualization options',
    'bins-tab': 'Create, load, and save collection of splits. Access completion and contamination estimates.',
    'tooltips-tab': 'Information on splits under the mouse pointer while browsing the display',
    'search-tab': 'Search splits, highlight them on the display, manipulate matching splits',
    'drawing-type': "Choose one of the two displays anvi'o supports: circular, and perpendicular tree",
    'order-by': "Order splits based on an anvi'o clustering",
    'view': "Select a data display",
    'draw-angle': "Start and the end degrees for the circular tree",
    'tree-radius': "Size of the circular tree from the center. Size will be automatically determined if this is 0",
    'tree-height': "Height of the perpendicular tree",
    'tree-width': "Width of the perpendicular tree",
    'layer-margins': "The distance between each layer on the tree",
    'bins-layer-height': "Size of the color bar that appears for each bin",
    'custom-layer-margins': "Set layer margin values for each layer separately",
    'edge-length-norm': "Log-normalize edge lengths of the tree",
    'show-grids': "Use grids instead of panels to identify bins",
}

// default tooltip placement is 'top', add new entry below if you want to manually set the placement.

var tooltip_placements = {
    'layers-tab': 'bottom',
    'bins-tab': 'bottom',
    'tooltips-tab': 'bottom',
    'search-tab': 'bottom',
}
