<script setup lang="ts">
import { css } from '@styled-system/css'
import { flex } from '@styled-system/patterns'

const fillStar = (n: number, rating: number) => {
	return n <= rating ? 'currentColor' : 'none'
}
</script>

<template>
	<section
		:class="css({
    overflow: 'hidden',
    py: '8',
  })
    "
	>
		<div :class="css({ display: 'flex', flexWrap: 'wrap' })">
			<div
				:class="css({
        lg: { w: '1/2', h: 'auto', p: 8 },
        w: 'full',
        h: '64',
        bgColor: 'gray.100',
        p: 6,
        rounded: 'xl',
        pos: 'relative',
      })
        "
			>
				<div :class="css({ w: 'full', h: 'full', objectFit: 'contain' })">
					&nbsp;
				</div>
			</div>
			<div
				:class="css({
        lg: { w: '1/2', mt: 0, pl: 6 },
        w: 'full',
        mt: '6',
        pos: 'relative',
      })
        "
			>
				<h1
					:class="css({
          color: 'gray.900',
          fontSize: '3xl',
          lineHeight: '1',
          fontWeight: 'medium',
          mb: 2,
          bg: 'gray.100',
        })
          "
				>
					&nbsp;
				</h1>
				<div :class="css({ display: 'flex', mb: '4' })">
					<span :class="css({ display: 'flex', alignItems: 'center' })">
						<svg
							:fill="fillStar(n, 5)"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							:class="css({
                w: 5,
                h: 5,
                color: 'gray.100',
              })
                "
							viewBox="0 0 24 24"
							v-for="n in 5"
							:key="n"
						>
							<path
								d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
							/>
						</svg>
					</span>
				</div>
				<p :class="css({ lineHeight: 'relaxed', bg: 'gray.100', w: '2/3' })">
					&nbsp;
				</p>
				<p :class="css({ mt: '6' })">
					<span
						:class="css({
            fontWeight: 'semibold',
            fontSize: '2xl',
            lineHeight: '1',
            fontVariantNumeric: 'tabular-nums',
            bg: 'gray.100',
            w: '1/2',
            display: 'block',
          })
            "
					>
						&nbsp;
					</span>
				</p>

				<div :class="flex({ mt: 6, align: 'center', gap: 1 })">
					<template v-for="_ in 2">
						<div
							:class="css({
              w: 6,
              h: 6,
              rounded: 'full',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'gray.200',
              bg: 'gray.100',
            })
              "
						></div>
					</template>
				</div>

				<div
					:class="css({
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          mt: '6',
        })
          "
				>
					<button
						:class="css({
            w: 'full',
            rounded: 'md',
            display: 'inline-flex',
            justifyContent: 'center',
            bg: 'gray.100',
            color: 'white',
            px: 3,
            py: 1.5,
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: 'gray.100',
            cursor: 'pointer',
          })
            "
					>
						&nbsp;
					</button>
				</div>
			</div>
		</div>
	</section>
</template>
