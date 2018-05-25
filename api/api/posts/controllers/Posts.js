'use strict';

/**
 * Posts.js controller
 *
 * @description: A set of functions called "actions" for managing `Posts`.
 */

module.exports = {

  /**
   * Retrieve posts records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.posts.fetchAll(ctx.query);
  },

  /**
   * Retrieve a posts record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.posts.fetch(ctx.params);
  },

  /**
   * Create a/an posts record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.posts.add(ctx.request.body);
  },

  /**
   * Update a/an posts record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.posts.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an posts record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.posts.remove(ctx.params);
  }
};
