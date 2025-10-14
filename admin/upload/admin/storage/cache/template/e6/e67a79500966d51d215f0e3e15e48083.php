<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* catalog/product_list.twig */
class __TwigTemplate_aa4e989fdf812317a73541710e5d1ddb extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 1
        echo ($context["header"] ?? null);
        echo ($context["column_left"] ?? null);
        echo "
<div id=\"content\">
  <div class=\"page-header\">
    <div class=\"container-fluid\">
      <div class=\"pull-right\">
        <button type=\"button\" data-toggle=\"tooltip\" title=\"";
        // line 6
        echo ($context["button_filter"] ?? null);
        echo "\" onclick=\"\$('#filter-product').toggleClass('hidden-sm hidden-xs');\" class=\"btn btn-default hidden-md hidden-lg\"><i class=\"fa fa-filter\"></i></button>
        <a href=\"";
        // line 7
        echo ($context["add"] ?? null);
        echo "\" data-toggle=\"tooltip\" title=\"";
        echo ($context["button_add"] ?? null);
        echo "\" class=\"btn btn-primary\"><i class=\"fa fa-plus\"></i></a>
        <!-- <button type=\"submit\" form=\"form-product\" formaction=\"";
        // line 8
        echo ($context["copy"] ?? null);
        echo "\" data-toggle=\"tooltip\" title=\"";
        echo ($context["button_copy"] ?? null);
        echo "\" class=\"btn btn-default\"><i class=\"fa fa-copy\"></i></button> -->
        <button type=\"button\" form=\"form-product\" formaction=\"";
        // line 9
        echo ($context["delete"] ?? null);
        echo "\" data-toggle=\"tooltip\" title=\"";
        echo ($context["button_delete"] ?? null);
        echo "\" class=\"btn btn-danger\" onclick=\"confirm('";
        echo ($context["text_confirm"] ?? null);
        echo "') ? \$('#form-product').submit() : false;\"><i class=\"fa fa-trash-o\"></i></button>
      </div>
      <h1>";
        // line 11
        echo ($context["heading_title"] ?? null);
        echo "</h1>
      <ul class=\"breadcrumb\">
        ";
        // line 13
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["breadcrumbs"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["breadcrumb"]) {
            // line 14
            echo "        <li><a href=\"";
            echo twig_get_attribute($this->env, $this->source, $context["breadcrumb"], "href", [], "any", false, false, false, 14);
            echo "\">";
            echo twig_get_attribute($this->env, $this->source, $context["breadcrumb"], "text", [], "any", false, false, false, 14);
            echo "</a></li>
        ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['breadcrumb'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 16
        echo "      </ul>
    </div>
  </div>
  <div class=\"container-fluid\">";
        // line 19
        if (($context["error_warning"] ?? null)) {
            // line 20
            echo "    <div class=\"alert alert-danger alert-dismissible\"><i class=\"fa fa-exclamation-circle\"></i> ";
            echo ($context["error_warning"] ?? null);
            echo "
      <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>
    </div>
    ";
        }
        // line 24
        echo "    ";
        if (($context["success"] ?? null)) {
            // line 25
            echo "    <div class=\"alert alert-success alert-dismissible\"><i class=\"fa fa-check-circle\"></i> ";
            echo ($context["success"] ?? null);
            echo "
      <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>
    </div>
    ";
        }
        // line 29
        echo "    <div class=\"row\">
      <div id=\"filter-product\" class=\"col-md-3 col-md-push-9 col-sm-12 hidden-sm hidden-xs\">
        <div class=\"panel panel-default\">
          <div class=\"panel-heading\">
            <h3 class=\"panel-title\"><i class=\"fa fa-filter\"></i> ";
        // line 33
        echo ($context["text_filter"] ?? null);
        echo "</h3>
          </div>
          <div class=\"panel-body\">
            <div class=\"form-group\">
              <label class=\"control-label\" for=\"input-name\">Heading Of Blog</label>
              <input type=\"text\" name=\"filter_heading\" value=\"";
        // line 38
        echo ($context["filter_heading"] ?? null);
        echo "\" placeholder=\"Enter Heading Of Blog\" id=\"input-name\" class=\"form-control\" />
            </div>
            <div class=\"form-group\">
              <label class=\"control-label\" for=\"input-model\">Author Name</label>
              <input type=\"text\" name=\"filter_auther\" value=\"";
        // line 42
        echo ($context["filter_auther"] ?? null);
        echo "\" placeholder=\"Enter Author Name\" id=\"input-model\" class=\"form-control\" />
            </div>
            <div class=\"form-group\">
              <label class=\"control-label\" for=\"input-start-date\">Start Date</label>
              <input type=\"date\" name=\"filter_start_date\" value=\"";
        // line 46
        echo ($context["filter_start_date"] ?? null);
        echo "\" id=\"input-start-date\" class=\"form-control\" />
            </div>
            <div class=\"form-group\">
              <label class=\"control-label\" for=\"input-end-date\">End Date</label>
              <input type=\"date\" name=\"filter_end_date\" value=\"";
        // line 50
        echo ($context["filter_end_date"] ?? null);
        echo "\" id=\"input-end-date\" class=\"form-control\" />
            </div>
            <div class=\"form-group text-right\">
              <button type=\"button\" id=\"button-filter\" class=\"btn btn-default\"><i class=\"fa fa-filter\"></i> ";
        // line 53
        echo ($context["button_filter"] ?? null);
        echo "</button>
            </div>
          </div>
        </div>
      </div>
      <div class=\"col-md-9 col-md-pull-3 col-sm-12\">
        <div class=\"panel panel-default\">
          <div class=\"panel-heading\">
            <h3 class=\"panel-title\"><i class=\"fa fa-list\"></i> ";
        // line 61
        echo ($context["text_list"] ?? null);
        echo "</h3>
          </div>
          <div class=\"panel-body\">
            <form action=\"";
        // line 64
        echo ($context["delete"] ?? null);
        echo "\" method=\"post\" enctype=\"multipart/form-data\" id=\"form-product\">
              <div class=\"table-responsive\">
                <table class=\"table table-bordered table-hover\">
                  <thead>
                    <tr>
                      <td style=\"width: 1px;\" class=\"text-center\"><input type=\"checkbox\" onclick=\"\$('input[name*=\\'selected\\']').prop('checked', this.checked);\" /></td>
                      <td class=\"text-center\">Image</td>
                      <td class=\"text-left\">Author Name</td>
                      <td class=\"text-left\">Heading Of Blog</td>
                      <td class=\"text-left\">Date of Publish</td>
                      <td class=\"text-right\">";
        // line 74
        echo ($context["column_action"] ?? null);
        echo "</td>
                    </tr>
                  </thead>
                  <tbody>
                    ";
        // line 78
        if (($context["products"] ?? null)) {
            // line 79
            echo "                    ";
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(($context["products"] ?? null));
            foreach ($context['_seq'] as $context["_key"] => $context["product"]) {
                // line 80
                echo "                    <tr>
                      <td class=\"text-center\">";
                // line 81
                if (twig_in_filter(twig_get_attribute($this->env, $this->source, $context["product"], "blog_id", [], "any", false, false, false, 81), ($context["selected"] ?? null))) {
                    // line 82
                    echo "                        <input type=\"checkbox\" name=\"selected[]\" value=\"";
                    echo twig_get_attribute($this->env, $this->source, $context["product"], "blog_id", [], "any", false, false, false, 82);
                    echo "\" checked=\"checked\" />
                        ";
                } else {
                    // line 84
                    echo "                        <input type=\"checkbox\" name=\"selected[]\" value=\"";
                    echo twig_get_attribute($this->env, $this->source, $context["product"], "blog_id", [], "any", false, false, false, 84);
                    echo "\" />
                        ";
                }
                // line 86
                echo "                      </td>
                      <td class=\"text-center\">";
                // line 87
                if (twig_get_attribute($this->env, $this->source, $context["product"], "image", [], "any", false, false, false, 87)) {
                    echo " <img src=\"";
                    echo twig_get_attribute($this->env, $this->source, $context["product"], "image", [], "any", false, false, false, 87);
                    echo "\" alt=\"";
                    echo twig_get_attribute($this->env, $this->source, $context["product"], "name", [], "any", false, false, false, 87);
                    echo "\" class=\"img-thumbnail\" /> ";
                } else {
                    echo " <span class=\"img-thumbnail list\"><i class=\"fa fa-camera fa-2x\"></i></span> ";
                }
                echo "</td>
                      <td class=\"text-left\">";
                // line 88
                echo twig_get_attribute($this->env, $this->source, $context["product"], "auther_name", [], "any", false, false, false, 88);
                echo "</td>
                      <td class=\"text-left\">";
                // line 89
                echo twig_get_attribute($this->env, $this->source, $context["product"], "heading", [], "any", false, false, false, 89);
                echo "</td>
                      <td class=\"text-left\">";
                // line 90
                echo twig_get_attribute($this->env, $this->source, $context["product"], "date_publish", [], "any", false, false, false, 90);
                echo "</td>
                      <td class=\"text-right\"><a href=\"";
                // line 91
                echo twig_get_attribute($this->env, $this->source, $context["product"], "edit", [], "any", false, false, false, 91);
                echo "\" data-toggle=\"tooltip\" title=\"";
                echo ($context["button_edit"] ?? null);
                echo "\" class=\"btn btn-primary\"><i class=\"fa fa-pencil\"></i></a></td>
                    </tr>
                    ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['product'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 94
            echo "                    ";
        } else {
            // line 95
            echo "                    <tr>
                      <td class=\"text-center\" colspan=\"8\">";
            // line 96
            echo ($context["text_no_results"] ?? null);
            echo "</td>
                    </tr>
                    ";
        }
        // line 99
        echo "                  </tbody>
                </table>
              </div>
            </form>
            <div class=\"row\">
              <div class=\"col-sm-6 text-left\">";
        // line 104
        echo ($context["pagination"] ?? null);
        echo "</div>
              <div class=\"col-sm-6 text-right\">";
        // line 105
        echo ($context["results"] ?? null);
        echo "</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <script type=\"text/javascript\">
    \$('#button-filter').on('click', function() {
      var url = '';

      var filter_heading = \$('input[name=\\'filter_heading\\']').val();

      if (filter_heading) {
        url += '&filter_heading=' + encodeURIComponent(filter_heading);
      }

      var filter_auther = \$('input[name=\\'filter_auther\\']').val();

      if (filter_auther) {
        url += '&filter_auther=' + encodeURIComponent(filter_auther);
      }

      var filter_start_date = \$('input[name=\\'filter_start_date\\']').val();
      if (filter_start_date) {
        url += '&filter_start_date=' + encodeURIComponent(filter_start_date);
      }

      var filter_end_date = \$('input[name=\\'filter_end_date\\']').val();
      if (filter_end_date) {
        url += '&filter_end_date=' + encodeURIComponent(filter_end_date);
      }

      location = 'index.php?route=catalog/product&user_token=";
        // line 138
        echo ($context["user_token"] ?? null);
        echo "' + url;
    });
  </script>
  <script type=\"text/javascript\">
    // IE and Edge fix!
    \$('button[form=\\'form-product\\']').on('click', function(e) {
      \$('#form-product').attr('action', \$(this).attr('formaction'));
    });

    \$('input[name=\\'filter_heading\\']').autocomplete({
      'source': function(request, response) {
        \$.ajax({
          url: 'index.php?route=catalog/product/autocomplete&user_token=";
        // line 150
        echo ($context["user_token"] ?? null);
        echo "&filter_heading=' + encodeURIComponent(request),
          dataType: 'json',
          success: function(json) {
            response(\$.map(json, function(item) {
              return {
                label: item['heading'],
                value: item['id']
              }
            }));
          }
        });
      },
      'select': function(item) {
        \$('input[name=\\'filter_heading\\']').val(item['label']);
      }
    });

    \$('input[name=\\'filter_auther\\']').autocomplete({
      'source': function(request, response) {
        \$.ajax({
          url: 'index.php?route=catalog/product/autocomplete&user_token=";
        // line 170
        echo ($context["user_token"] ?? null);
        echo "&filter_auther=' + encodeURIComponent(request),
          dataType: 'json',
          success: function(json) {
            response(\$.map(json, function(item) {
              return {
                label: item['author'],
                value: item['id']
              }
            }));
          }
        });
      },
      'select': function(item) {
        \$('input[name=\\'filter_auther\\']').val(item['label']);
      }
    });
  </script>
</div>
";
        // line 188
        echo ($context["footer"] ?? null);
    }

    public function getTemplateName()
    {
        return "catalog/product_list.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  375 => 188,  354 => 170,  331 => 150,  316 => 138,  280 => 105,  276 => 104,  269 => 99,  263 => 96,  260 => 95,  257 => 94,  246 => 91,  242 => 90,  238 => 89,  234 => 88,  222 => 87,  219 => 86,  213 => 84,  207 => 82,  205 => 81,  202 => 80,  197 => 79,  195 => 78,  188 => 74,  175 => 64,  169 => 61,  158 => 53,  152 => 50,  145 => 46,  138 => 42,  131 => 38,  123 => 33,  117 => 29,  109 => 25,  106 => 24,  98 => 20,  96 => 19,  91 => 16,  80 => 14,  76 => 13,  71 => 11,  62 => 9,  56 => 8,  50 => 7,  46 => 6,  37 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "catalog/product_list.twig", "");
    }
}
