<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'pycha_micha' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'HzRX[ZLoC+&,)Wfj*@)VDO*,<>Lb3Xfe0%rRL4:pLS*;{.B3/c_b;cF)I^0*`1P-' );
define( 'SECURE_AUTH_KEY',  'W-6`cQ99*gk6$r!qVNdzk}psZ=kOnw]{?+<q|W&1jX.zaJm|f+7t|IlbplpwAn?:' );
define( 'LOGGED_IN_KEY',    'PMy4@(/@PZMo4y)k|ciG&eBUY;epekRZ.:NS? nhluI6kDhT2YiUus?{%#}9NAUo' );
define( 'NONCE_KEY',        '>T*@IPe+<oD08sV%5}A)ShB>4Bgxyhqg[O W49]A WpU#WH)lD7.7i*=FYaE|xQc' );
define( 'AUTH_SALT',        ':F{95]WZlGF,cHf}n-Uu{Ie2,B8):G[2V4s2#p:hiHJ 3ZX(DRba;0>=s`|9(e&^' );
define( 'SECURE_AUTH_SALT', 'm/t`F]M[tw?9QZ.`5,H?O[L/}85/$lNH?-_ag*26mv 1(~F)[|>X:z?;=d15|=t4' );
define( 'LOGGED_IN_SALT',   'Q] Z*z=vK*abvvASHU!dX{-=9s/u8(<X) +<GKHT(`>$.y.gZcfk-*y9OO~f:r|-' );
define( 'NONCE_SALT',       '1C3|lo7?Q`MnJQ#NB=`ED?Njv>$;T2{`Dn0VGjBhl]DH3V QPz=Ez_o.`[iCUz4L' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
