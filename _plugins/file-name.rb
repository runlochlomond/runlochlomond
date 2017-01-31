module Jekyll
  module FileNameFilter
    def file_name(input)
      index = input.rindex('/')
      if !index.nil?
        return input[(index + 1)..-1]
      end
      return input
    end
  end
end

Liquid::Template.register_filter(Jekyll::FileNameFilter)