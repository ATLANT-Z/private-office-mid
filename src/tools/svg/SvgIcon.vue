<template>
    <svg class="icon"
         :class="{ 'icon-spin': spin, 'stroke': stroke, 'parent-size': parentSize}"
         :style="{'height': height,'width': width}"
    >
        <use :xlink:href="`#${icon}`"/>
    </svg>
</template>

<script>
	export default {
		name: 'SvgIcon',
		props: {
			icon: {
				type: String,
				required: true,
			},
			spin: {
				type: Boolean,
				default: false,
			},
			stroke: {
				type: Boolean,
				default: false,
			},
			width: Number,
			height: Number,
			parentSize: {
				type: Boolean,
				default: false,
			},
		},
	}
</script>

<style lang="scss">
    svg.icon {
        height: 20px;
        width: 20px;
        vertical-align: middle;
    
        fill: currentColor !important;
        & * {
            fill: currentColor !important;
        }
    }
    
    svg.icon.stroke {
        fill: transparent !important;
        stroke: currentColor !important;
        
        & * {
            fill: transparent !important;
            stroke: currentColor !important;
        }
    }

    svg.icon.parent-size {
        height: 100%;
        width: 100%;
    }
    
    svg.icon-spin {
        animation: icon-spin 2s infinite linear;
    }
    
    @keyframes icon-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(359deg);
        }
    }
</style>
